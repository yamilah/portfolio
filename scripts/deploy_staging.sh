#!/bin/bash
set -e

npm run build
gsutil -m rsync -Rd build/prod gs://staging.yamilah.com
echo \"Deployed to http://staging.yamilah.com\"
