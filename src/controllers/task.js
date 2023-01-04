import { connect } from '../database'

export const getTasks = async (_req, res) => {
  const connection = await connect()
  const [rows] = await connection.query('select * from tasks')
  res.json(rows)
}

export const getTask = async (req, res) => {
  const connection = await connect()
  const [rows] = await connection.query('select * from tasks where id = ?', [req.params.id])

  res.json(rows)
}

export const getTaskCount = async (_req, res) => {
  const connection = await connect()
  const [rows] = await connection.query('select count(*) from tasks')
  res.json(rows[0]["count(*)"])
}


export const saveTask = async (req, res) => {
  const connection = await connect()
  const [results] = await connection.query('insert into tasks (title, description) values (?,?)', [req.body.title, req.body.description])

  res.json({
    id: results.insertId,
    ...req.body
  })
}

export const deleteTask = async (req, res) => {
  const connection = await connect()
  await connection.query('delete from tasks where id = ?', [req.params.id])
  res.sendStatus(204)
}


export const updateTask = async (req, res) => {
  const connection = await connect()
  await connection.query('update tasks set ? where id = ?', [req.body, req.params.id])
  res.sendStatus(204)
}

