#!/bin/sh

envsubst < /tmp/index.template.html > /var/www/index.html

[ -z "$@" ] && nginx -g 'daemon off;' || $@
