FROM ubuntu:22.04 as build
WORKDIR /app

RUN apt update
RUN apt install -y curl ca-certificates
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash -

RUN apt install -y nodejs protobuf-compiler

RUN npm install -g ts-proto

COPY package.json .
RUN npm install

COPY . .

RUN mkdir -p generated

CMD ["sh", "-c", "protoc \
                       --plugin=protoc-gen-ts=./node_modules/ts-proto/protoc-gen-ts_proto \
                       --proto_path=proto \
                       --ts_proto_opt=nestJs=true \
                       --ts_proto_out=generated \
                       proto/**/*.proto \
                       && npm run tsc"]