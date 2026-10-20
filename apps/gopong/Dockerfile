# ---- Stage 1: build ----
FROM golang:1.23-alpine AS build
WORKDIR /apps/gopong
COPY go.mod ./
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 go build -o /out/server .

# ---- Stage 2: run ----
FROM alpine:3.20
RUN adduser -D -u 10001 app
COPY --from=build /out/server /usr/local/bin/server
USER app
EXPOSE 8080
CMD ["server"]