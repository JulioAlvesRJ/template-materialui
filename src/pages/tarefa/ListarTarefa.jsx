import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Modal,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import CriarTarefa from './CriarTarefa';
import EditarTarefa from './EditarTarefa';

// Função para criar os dados iniciais da listagem de tarefas
function createData(idTarefa, tituloTarefa, descricaoTarefa, inicioTarefa, fimTarefa, statusTarefa, recursoTarefa) {
  return { idTarefa, tituloTarefa, descricaoTarefa, inicioTarefa, fimTarefa, statusTarefa, recursoTarefa };
}

// Dados iniciais da listagem de tarefas
const initialRows = [
  createData(1, 'Tarefa 1', 'Descrição da Tarefa 1', '2022-01-01', '2022-01-02', 'Concluída', 'Recurso 1'),
  createData(2, 'Tarefa 2', 'Descrição da Tarefa 2', '2022-01-03', '2022-01-04', 'Em Andamento', 'Recurso 2'),
  createData(3, 'Tarefa 3', 'Descrição da Tarefa 3', '2022-01-04', '2022-01-05', 'Em Andamento', 'Recurso 3'),
  createData(4, 'Tarefa 4', 'Descrição da Tarefa 4', '2022-01-05', '2022-01-06', 'Em Andamento', 'Recurso 4'),
  createData(5, 'Tarefa 5', 'Descrição da Tarefa 5', '2022-01-06', '2022-01-07', 'Em Andamento', 'Recurso 5'),
  createData(6, 'Tarefa 6', 'Descrição da Tarefa 6', '2022-01-07', '2022-01-08', 'Aguardando', 'Recurso 6'),
];

// Componente ListarTarefa
const ListarTarefa = () => {
  const [open, setOpen] = useState(false);
  const [openEditar, setOpenEditar] = useState(false);
  const [tarefas, setTarefas] = useState([]);
  const [tarefaSelecionada, setTarefaSelecionada] = useState(null);

  useEffect(() => {
    setTarefas(initialRows);
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenEditar = (tarefa) => {
    setTarefaSelecionada(tarefa);
    setOpenEditar(true);
  };
  const handleCloseEditar = () => setOpenEditar(false);

  const handleDeletar = (id) => {
    setTarefas(tarefas.filter(tarefa => tarefa.idTarefa !== id));
  };

  return (
    <>
      <Card>
        <CardHeader title="Tarefas" subheader="Listagem de Tarefas" />
        <CardContent>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell>Título</TableCell>
                  <TableCell align="right">Descrição</TableCell>
                  <TableCell align="right">Data de Início</TableCell>
                  <TableCell align="right">Data de Finalização</TableCell>
                  <TableCell align="right">Status</TableCell>
                  <TableCell align="right">Recurso</TableCell>
                  <TableCell align="center">Ações</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tarefas.map((row, indice) => (
                  <TableRow key={indice} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      {row.idTarefa}
                    </TableCell>
                    <TableCell>{row.tituloTarefa}</TableCell>
                    <TableCell align="right">{row.descricaoTarefa}</TableCell>
                    <TableCell align="right">{row.inicioTarefa}</TableCell>
                    <TableCell align="right">{row.fimTarefa}</TableCell>
                    <TableCell align="right">{row.statusTarefa}</TableCell>
                    <TableCell align="right">{row.recursoTarefa}</TableCell>
                    <TableCell align="center">
                      <Button variant="contained" color="success" onClick={() => handleOpenEditar(row)}>
                        <EditIcon fontSize="small" />
                      </Button>
                      <Button variant="contained" color="error" onClick={() => handleDeletar(row.idTarefa)}>
                        <DeleteIcon fontSize="small" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained" onClick={handleOpen}>
            Criar Tarefa
          </Button>
        </CardActions>
      </Card>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <div>
          <CriarTarefa handleClose={handleClose} tarefas={tarefas} setTarefas={setTarefas} />
        </div>
      </Modal>
      <Modal open={openEditar} onClose={handleCloseEditar} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <div>
          <EditarTarefa handleClose={handleCloseEditar} tarefa={tarefaSelecionada} setTarefas={setTarefas} />
        </div>
      </Modal>
    </>
  );
};

export default ListarTarefa;
