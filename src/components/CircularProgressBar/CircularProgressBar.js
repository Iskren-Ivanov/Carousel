import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import styles from './CircularProgressBar.module.css';

const CircularProgressBar = () => (
  <div className={ styles.progressBarContainer }>
    <div className={ styles.progress }>
      <Box sx={ { display: "flex" } }>
        <CircularProgress />
      </Box>
    </div>
    <div className={ styles.progressMessage }>
      Now is the best time to make a coup of coffee.
    </div>
  </div>
);

export default CircularProgressBar;
