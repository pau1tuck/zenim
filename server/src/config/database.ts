import ExpressCassandra from "express-cassandra";

const models: any = ExpressCassandra.createClient({
    clientOptions: {
        contactPoints: [process.env.DB_CONTACT_POINTS],
        localDataCenter: String(process.env.DB_LOCAL_DATA_CENTER),
        protocolOptions: { port: Number(process.env.DB_PORT) },
        keyspace: String(process.env.DB_KEYSPACE),
        queryOptions: { consistency: ExpressCassandra.consistencies.one },
        credentials: {
            username: String(process.env.DB_USER),
            password: String(process.env.DB_PASS),
        },
    },
    ormOptions: {
        defaultReplicationStrategy: {
            class: "SimpleStrategy",
            replication_factor: 1,
        },
        dropTableOnSchemaChange: true,
        migration: "safe",
    },
});

export default models;
