import * as faunadb from "faunadb";

export const query = faunadb.query;

export const client = new faunadb.Client({
  // @ts-ignore
  secret: import.meta.env.FAUNADB_SERVER_SECRET,
  domain: "db.fauna.com",
  // NOTE: Use the correct domain for your database's Region Group.
  port: 443,
  scheme: "https",
});
