cd web
npm install pnpm@latest -g
pnpm update
cd .. 
rm -rf server/dist/ 
mv web/dist/ server/
go build