import { getConnection } from "../database/connection";

export const getFacturas = async (req, res) => {
  // const desde = "'"+ req.params.desde+"'";
  // const hasta = "'" + req.params.hasta + "'";

  let desde = "'" + req.query.desde + "'";
  console.log(desde);
  let hasta = "'" + req.query.hasta + "'";
  console.log(hasta);

  const pool = await getConnection();
  const result = await pool
    .request()
    .query(
      `SELECT IdTrans, Comprobante, Ciudad, NumAsignado, CAST(FechaIng AS date) AS FechaIng, HoraIng , HoraSal, Estado, CodUsuario, Ruc_Cliente, Nombre_Cliente, Direccion_Cliente, Telefono_Cliente, SubTotal, Total, Valor_Iva FROM [Parqueadero].[dbo].[GnFactura] WHERE FechaIng BETWEEN ${desde} AND ${hasta}`
    );
  res.json(result.recordset);
  // SELECT IdTrans, cast(HoraSal as date) FROM [Parqueadero].[dbo].[GnFactura]
};
