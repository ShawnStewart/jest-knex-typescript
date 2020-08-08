module.exports = {
    test: {
        client: 'sqlite3',
        connection: { filename: ':memory:' },
        useNullAsDefault: true,
        migrations: {
            directory: './src/database/migrations',
            loadExtensions: ['.ts'],
            extension: 'ts',
        },
        seeds: {
            directory: './src/database/seeds',
            loadExtensions: ['.ts'],
            extension: 'ts',
        },
    },
    // test: {
    //     client: 'postgresql',
    //     connection: `postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@db:5432/test_db`,
    //     useNullAsDefault: true,
    //     migrations: {
    //         directory: './database/migrations',
    //     },
    //     seeds: {
    //         directory: './database/seeds',
    //     },
    // },
    development: {
        client: 'sqlite3',
        connection: { filename: './db.sqlite' },
        useNullAsDefault: true,
        migrations: {
            directory: './database/migrations',
            tableName: 'migrations',
            extension: 'ts',
        },
        seeds: { directory: './src/database/seeds', extension: 'ts' },
    },
};
