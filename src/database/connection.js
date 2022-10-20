import sql from "mssql";

const dbsettings = {
  user: "sa",
  password: "01061979",
  server: "localhost",
  database: "Parqueadero",
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

export async function getConnection() {
  try {
    const pool = await sql.connect(dbsettings);
    return pool;
  } catch (err) {
    console.log(err);
  }
}

