echo OFF

echo ----- Clonando env ------
call copy /Y .env.example .env

echo ----- Instalar dependências composer -----
call composer install

echo ----- Instalar dependências npm -----
call npm install
echo y | npm install

echo ----- Rodar npm run build -----
call npm run build

echo ----- Gerar chave aleatória pelo Artisan -----
call php artisan key:generate

echo ----- Migrar banco de dados pelo Artisan -----
call php artisan migrate

echo ----- Iniciando servidor Laravel em nova janela -----
start cmd /k "php artisan serve"

echo ----- Abrindo o navegador -----
start http://127.0.0.1:8000

pause