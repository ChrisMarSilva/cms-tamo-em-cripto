package main

import (
	"database/sql"

	_ "github.com/mattn/go-sqlite3"
)

type Database struct {
	*sql.DB
}

func NewDatabase() (*Database, error) { // 
	db, err := sql.Open("sqlite3", "./banco.db")
	if err != nil {
		return nil, err
	}

	err = db.Ping()
	if err != nil {
		return nil, err
	}

	return &Database{db}, nil
}
