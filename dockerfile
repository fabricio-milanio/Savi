# Usar imagem oficial PHP 8.2 com Apache
FROM php:8.2-apache

# Evita prompts interativos durante a instalação de pacotes
ENV DEBIAN_FRONTEND=noninteractive

# Instalar dependências do sistema, extensões PHP e Node.js 18
RUN apt-get update && apt-get install -y \
    unzip \
    curl \
    git \
    gnupg \
    libonig-dev \
    libzip-dev \
    libicu-dev \
    libxml2-dev \
    # Adicionado para a extensão pdo_sqlite
    libsqlite3-dev \
    libcurl4-openssl-dev \
    zip \
    # Adicionado pdo_sqlite
    && docker-php-ext-install intl mbstring pdo_mysql pdo_sqlite zip xml curl opcache \
    && curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Instalar Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Habilitar mod_rewrite do Apache
RUN a2enmod rewrite

# Definir diretório de trabalho
WORKDIR /var/www/html

# Copiar o código da aplicação para o contêiner
# É uma boa prática copiar composer.json e package.json primeiro para aproveitar o cache do Docker
COPY composer.json composer.lock ./
RUN composer install --no-dev --no-scripts --no-autoloader

COPY package.json package-lock.json ./
RUN npm install

# Copiar o restante do código
COPY . .

# Finalizar a instalação das dependências
RUN composer install --no-dev --optimize-autoloader
RUN npm run build

# Gerar a chave da aplicação Laravel
RUN php artisan key:generate

# Criar o arquivo de banco de dados e rodar as migrações
# Isso garante que o banco de dados esteja pronto quando a aplicação iniciar
RUN touch database/database.sqlite
RUN php artisan migrate --force

# Ajustar permissões para o usuário do Apache (www-data)
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache /var/www/html/database
RUN chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache /var/www/html/database

# Ajustar Apache para apontar para o diretório /public do Laravel
RUN sed -i 's|DocumentRoot /var/www/html|DocumentRoot /var/www/html/public|' /etc/apache2/sites-available/000-default.conf \
    && echo '<Directory /var/www/html/public>\n\
    Options Indexes FollowSymLinks\n\
    AllowOverride All\n\
    Require all granted\n\
</Directory>' > /etc/apache2/conf-available/laravel.conf \
    && a2enconf laravel

# Expor a porta 80
EXPOSE 80

# Comando para iniciar o servidor Apache
CMD ["apache2-foreground"]
