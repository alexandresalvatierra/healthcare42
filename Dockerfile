FROM curlimages/curl:latest

COPY --chmod=755 bin/setup-kong.sh /bin/setup-kong.sh