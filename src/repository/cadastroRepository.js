import con from './connection.js';

export async function inserirCadastro(login) {
    const comando = `
    INSERT INTO tb_cadastro_adm(email, senha)
    values( ? , ?)
    `

    let resposta = await con.query(comando, [login.email, login.senha])
    let info = resposta[0];

    return info.insertId;
}

export async function consultarCadastro (id, login) {
  const comando = ` 
  select id_cadastro id,
  email  email,
  senha  senha
  from tb_cadastro_adm
  `;

  let resposta = await con.query(comando);
  let registros = resposta[0];

  return registros;
}

export async function alterarCadastro (login, id) {
    const comando = `

    update tb_cadastro_adm 
    set email = ?,
        senha = ?
    where id_cadastro = ?;
    `
 
    let resposta = await con.query(comando, [login.email, login.senha, id])
    let info = resposta[0];
    
    return info.affectedRows;
}

export async function deletarCadastro (id, login) {
    const comando = ` 
     delete from tb_cadastro_adm
     where id_cadastro = ?
    `

    let resposta = await con.query(comando, [id]);
    let info = resposta[0];

    return info.affectedRows;
}