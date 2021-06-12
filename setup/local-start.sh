# Copyright (C) 2021  Marc Zbyszynski
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU Affero General Public License as
# published by the Free Software Foundation, either version 3 of the
# License, or (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Affero General Public License for more details.
#
# You should have received a copy of the GNU Affero General Public License
# along with this program.  If not, see <https://www.gnu.org/licenses/>.

#!/bin/sh
set -e

docker-compose up -d

if [ -z "$EXPO_GQL_TOKEN" ]
then
    sleep 5
    # FIXME: This has no silent option but maybe there is a shell way to make it silent?
    fauna add-endpoint http://localhost:8443/ \
    --alias localhost \
    --key secret

    fauna create-database development_db --endpoint=localhost
    # FIXME: use sed to extract the key
    KEY_OUTPUT=`fauna create-key development_db --endpoint=localhost`

    echo $KEY_OUTPUT
    echo "Creating Key..."

    APP_KEY=`awk -F"secret: " '{sub(/ .*/,"",$2);print $2}' <<< $KEY_OUTPUT`
    # APP_KEY=`sed -n 's/secret: \([^\s]*\)/\1/p' <<< $KEY_OUTPUT`
    # APP_KEY=$(echo -e $KEY_OUTPUT | sed -n 's/secret: \([:alnum:]*\)/\1/p' | sed "s/[^[:alnum:].-]//g")
    # APP_KEY=$(echo $KEY_OUTPUT | sed -n 's/secret: \([:alnum:]*\)/\1/p')

    echo "APP_KEY $APP_KEY"
    # # CURL_OUTPUT=`curl -H "Authorization: Bearer $APP_KEY" http://localhost:8084/import?mode=override --data-binary "@schema.graphql"`
    export CURL_OUTPUT=$(cat schema.graphql | curl -H "Authorization: Bearer $APP_KEY" --data-binary @- http://localhost:8084/import?mode=override)
    echo "Curl output is\n ${CURL_OUTPUT}"
    export EXPO_GQL_TOKEN=$(echo $CURL_OUTPUT | awk -F"Bearer " '{sub(/".*/,"",$2);print $2}' | tr -d '[:space:]')
    # export EXPO_GQL_TOKEN=$(echo $CURL_OUTPUT | sed -n 's/{ "Authorization": "Bearer\ \(.*\)/\1/p' | sed 's/}//' | sed 's/"//g')

    # echo "GraphQL Schema Setup Complete\n"

    echo "Token is \"$EXPO_GQL_TOKEN\""
fi


expo start
