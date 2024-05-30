import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

const EditarTarefa = ({ handleCloseEditar, idTarefaSelecionada, tarefas, tarefa, setTarefas }) => {
  const [idTarefa, setIdTarefa] = useState();
  const [tituloTarefa, setTituloTarefa] = useState('');
  const [descricaoTarefa, setDescricaoTarefa] = useState('');
  const [inicioTarefa, setInicioTarefa] = useState('');
  const [fimTarefa, setFimTarefa] = useState('');
  const [recursoTarefa, setRecursoTarefa] = useState('');
  const [statusTarefa, setStatusTarefa] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    setIdTarefa(idTarefaSelecionada);
    setTituloTarefa(tarefa.tituloTarefa);
    setDescricaoTarefa(tarefa.descricaoTarefa);
    setInicioTarefa(tarefa.inicioTarefa);
    setFimTarefa(tarefa.fimTarefa);
    setRecursoTarefa(tarefa.recursoTarefa);
    setStatusTarefa(tarefa.statusTarefa);
  }, [idTarefaSelecionada, tarefa]);

  const handleRecurso = (event) => {
    setRecursoTarefa(event.target.value);
  };

  const handleStatus = (event) => {
    setStatusTarefa(event.target.value);
  };

  const handleEditar = () => {
    if (!tituloTarefa || !descricaoTarefa || !inicioTarefa || !fimTarefa || !recursoTarefa || !statusTarefa) {
      setError('Todos os campos são obrigatórios');
      return;
    }
    setTarefas((current) =>
      current.map((obj) => {
        if (obj.idTarefa === idTarefaSelecionada) {
          return {
            ...obj,
            idTarefa: idTarefaSelecionada,
            tituloTarefa,
            descricaoTarefa,
            inicioTarefa,
            fimTarefa,
            recursoTarefa,
            statusTarefa,
          };
        }
        return obj;
      })
    );
    handleCloseEditar();
  };

  const handleReset = () => {
    setTituloTarefa('');
    setDescricaoTarefa('');
    setInicioTarefa('');
    setFimTarefa('');
    setRecursoTarefa('');
    setStatusTarefa('');
    setError('');
  };

  return (
    <Grid container justifyContent="center">
      <Card sx={style}>
        <CardHeader title="Tarefas" subheader="Edição de Tarefas" />
        <CardContent sx={{ width: '95%', maxWidth: '100%' }}>
          {error && <Alert severity="error">{error}</Alert>}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel htmlFor="tarefa_titulo">Título</InputLabel>
                <Input
                  id="tarefa_titulo"
                  aria-describedby="tarefa_titulo_helper_text"
                  value={tituloTarefa}
                  onChange={(e) => {
                    setTituloTarefa(e.target.value);
                  }}
                />
                <FormHelperText id="tarefa_titulo_helper_text">Título da Tarefa.</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel htmlFor="tarefa_descricao">Descrição</InputLabel>
                <Input
                  id="tarefa_descricao"
                  aria-describedby="tarefa_descricao_helper_text"
                  value={descricaoTarefa}
                  onChange={(e) => {
                    setDescricaoTarefa(e.target.value);
                  }}
                />
                <FormHelperText id="tarefa_descricao_helper_text">Descrição da Tarefa.</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <Input
                  id="tarefa_inicio"
                  type="date"
                  aria-describedby="tarefa_inicio_helper_text"
                  value={inicioTarefa}
                  onChange={(e) => {
                    setInicioTarefa(e.target.value);
                  }}
                />
                <FormHelperText id="tarefa_inicio_helper_text">Início da Tarefa.</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <Input
                  id="tarefa_fim"
                  type="date"
                  aria-describedby="tarefa_fim_helper_text"
                  value={fimTarefa}
                  onChange={(e) => {
                    setFimTarefa(e.target.value);
                  }}
                />
                <FormHelperText id="tarefa_fim_helper_text">Fim da Tarefa.</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel htmlFor="tarefa_recurso">Recurso</InputLabel>
                <Select
                  id="tarefa_recurso"
                  value={recursoTarefa}
                  label="Recurso"
                  onChange={handleRecurso}
                >
                  <MenuItem value={'Recurso 1'}>Recurso 1</MenuItem>
                  <MenuItem value={'Recurso 2'}>Recurso 2</MenuItem>
                  <MenuItem value={'Recurso 3'}>Recurso 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel htmlFor="tarefa_status">Status</InputLabel>
                <Select
                  id="tarefa_status"
                  value={statusTarefa}
                  label="Status"
                  onChange={handleStatus}
                >
                  <MenuItem value={'Aguardando'}>Aguardando</MenuItem>
                  <MenuItem value={'Em Andamento'}>Em Andamento</MenuItem>
                  <MenuItem value={'Concluída'}>Concluída</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid container spacing={2} mt={2}>
              <Grid item xs={4}>
                <Button variant="contained" onClick={handleEditar} fullWidth>Salvar</Button>
              </Grid>
              <Grid item xs={4}>
                <Button variant="outlined" onClick={handleCloseEditar} fullWidth>Cancelar</Button>
              </Grid>
              <Grid item xs={4}>
                <Button variant="text" onClick={handleReset} fullWidth>Limpar</Button>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

export default EditarTarefa;
