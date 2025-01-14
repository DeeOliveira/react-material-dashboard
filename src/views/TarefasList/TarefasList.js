import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { TarefasTable, TarefasToolbar } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const TarefasList = () => {
  const classes = useStyles();

  const [tarefas] = useState([]);

  return (
    <div className={classes.root}>
      <TarefasToolbar />
      <div className={classes.content}>
        <TarefasTable users={tarefas} />
      </div>
    </div>
  );
};

export default TarefasList;
