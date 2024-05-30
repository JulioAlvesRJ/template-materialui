import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, Input, FormHelperText, MenuItem, Select, Grid, Card, CardHeader, CardContent, Button, Typography, Box } from '@mui/material';

const CriarTarefa = ({ handleClose, tarefas, setTarefas }) => {
  const [idTarefa, setIdTarefa] = useState(0);
  const [tituloTarefa, setTituloTarefa] = useState('');
  const [descricaoTarefa, setDescricaoTarefa] = useState('');
  const [inicioTarefa, setInicioTarefa] = useState('');
  const [fimTarefa, setFimTarefa] = useState('');
  const [recursoTarefa, setRecursoTarefa] = useState('');
  const [statusTarefa, setStatusTarefa] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const proximoId = tarefas.length > 0 ? Math.max(...tarefas.map(tarefa => tarefa.idTarefa)) + 1 : 1;
    setIdTarefa(proximoId);
  }, [tarefas]);

  const handleRecurso = (event) => {
    setRecursoTarefa(event.target.value);
  };

  const handleStatus = (event) => {
    setStatusTarefa(event.target.value);
  };

  const validate = () => {
    const newErrors = {};
    if (!tituloTarefa) newErrors.tituloTarefa = "Título é obrigatório";
    if (!descricaoTarefa) newErrors.descricaoTarefa = "Descrição é obrigatória";
    if (!inicioTarefa) newErrors.inicioTarefa = "Data de início é obrigatória";
    if (!fimTarefa) newErrors.fimTarefa = "Data de fim é obrigatória";
    if (!recursoTarefa) newErrors.recursoTarefa = "Recurso é obrigatório";
    if (!statusTarefa) newErrors.statusTarefa = "Status é obrigatório";
    return newErrors;
  };

  const handleSalvar = () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const novaTarefa = {
      idTarefa,
      tituloTarefa,
      descricaoTarefa,
      inicioTarefa,
      fimTarefa,
      recursoTarefa,
      statusTarefa,
    };

    setTarefas([...tarefas, novaTarefa]);
    handleClose();
  };

  return (
    <Grid container spacing={2}>
      <Card sx={style}>
        <CardHeader title="Tarefas" subheader="Cadastro de Tarefas" />
        <CardContent sx={{ width: '95%', maxWidth: '100%' }}>
          <Grid item xs={12}>
            <FormControl fullWidth error={!!errors.tituloTarefa}>
              <InputLabel htmlFor="tarefa_titulo">Título</InputLabel>
              <Input id="tarefa_titulo" value={tituloTarefa} onChange={e => setTituloTarefa(e.target.value)} />
              {errors.tituloTarefa && <FormHelperText>{errors.tituloTarefa}</FormHelperText>}
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth error={!!errors.descricaoTarefa}>
              <InputLabel htmlFor="tarefa_descricao">Descrição</InputLabel>
              <Input id="tarefa_descricao" value={descricaoTarefa} onChange={e => setDescricaoTarefa(e.target.value)} />
              {errors.descricaoTarefa && <FormHelperText>{errors.descricaoTarefa}</FormHelperText>}
            </FormControl>
          </Grid>
          <Grid container spacing={2} mt={1}>
            <Grid item xs={6}>
              <FormControl fullWidth error={!!errors.inicioTarefa}>
                <InputLabel htmlFor="tarefa_inicio">Início</InputLabel>
                <Input id="tarefa_inicio" type="date" value={inicioTarefa} onChange={e => setInicioTarefa(e.target.value)} />
                {errors.inicioTarefa && <FormHelperText>{errors.inicioTarefa}</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth error={!!errors.fimTarefa}>
                <InputLabel htmlFor="tarefa_fim">Fim</InputLabel>
                <Input id="tarefa_fim" type="date" value={fimTarefa} onChange={e => setFimTarefa(e.target.value)} />
                {errors.fimTarefa && <FormHelperText>{errors.fimTarefa}</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth error={!!errors.recursoTarefa}>
                <InputLabel htmlFor="tarefa_recurso">Recurso</InputLabel>
                <Select id="tarefa_recurso" value={recursoTarefa} onChange={handleRecurso}>
                  <MenuItem value={'Recurso 1'}>Recurso 1</MenuItem>
                  <MenuItem value={'Recurso 2'}>Recurso 2</MenuItem>
                  <MenuItem value={'Recurso 3'}>Recurso 3</MenuItem>
                </Select>
                {errors.recursoTarefa && <FormHelperText>{errors.recursoTarefa}</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth error={!!errors.statusTarefa}>
                <InputLabel htmlFor="tarefa_status">Status</InputLabel>
                <Select id="tarefa_status" value={statusTarefa} onChange={handleStatus}>
                  <MenuItem value={'Aguardando'}>Aguardando</MenuItem>
                  <MenuItem value={'Em Andamento'}>Em Andamento</MenuItem>
                  <MenuItem value={'Concluída'}>Concluída</MenuItem>
                </Select>
                {errors.statusTarefa && <FormHelperText>{errors.statusTarefa}</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid container spacing={2} mt={2}>
              <Grid item xs={6}>
                <Button variant="contained" onClick={handleSalvar} fullWidth>Salvar</Button>
              </Grid>
              <Grid item xs={6}>
                <Button variant="outlined" onClick={handleClose} fullWidth>Cancelar</Button>
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
  width: '60%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default CriarTarefa;
