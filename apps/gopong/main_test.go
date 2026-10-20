package main

import (
	"net/http"
	"net/http/httptest"
	"os"
	"strings"
	"testing"
)

func TestPing(t *testing.T) {
	path := os.Getenv("BASE_PATH")
	req := httptest.NewRequest(http.MethodGet, path+"/ping", nil)
	rec := httptest.NewRecorder()

	newMux().ServeHTTP(rec, req)

	if rec.Code != http.StatusOK {
		t.Fatalf("expected status 200, got %d", rec.Code)
	}
	if strings.TrimSpace(rec.Body.String()) != "pong" {
		t.Fatalf("expected body %q, got %q", "pong", rec.Body.String())
	}
}

func TestHealth(t *testing.T) {
	path := os.Getenv("BASE_PATH")
	req := httptest.NewRequest(http.MethodGet, path+"/health", nil)
	rec := httptest.NewRecorder()

	newMux().ServeHTTP(rec, req)

	if rec.Code != http.StatusOK {
		t.Fatalf("expected status 200, got %d", rec.Code)
	}
}