1. run "npm i"
2. "npm start" or " node server.js"
3. CURL requests
    Exact by author:

    curl --location --request POST 'http://localhost:3000/exact' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "field": "authorId",
        "value": "user1"
    }'

    Exact by filename:

    curl --location --request POST 'http://localhost:3000/exact' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "field": "filename",
        "value": "Extended product demo"
    }'

    Partial by author:

    curl --location --request POST 'http://localhost:3000/partial' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "field": "authorId",
        "value": "user1"
    }'

    Partial by filename:

    curl --location --request POST 'http://localhost:3000/partial' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "field": "filename",
        "value": "product"
    }'

    Range on duration:

    curl --location --request POST 'http://localhost:3000/duration-range' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "minDuration": 1,
        "maxDuration": 300
    }'

    Tags:

    curl --location --request POST 'http://localhost:3000/tags' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "tags": "webinar, marketing"
    }'

5. to run tests execute "npm run test"


