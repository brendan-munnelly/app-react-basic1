#!/usr/bin/env sh
# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git checkout -B main
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:brendan-munnelly/app-react-basic1.git main:gh-pages

cd -        
