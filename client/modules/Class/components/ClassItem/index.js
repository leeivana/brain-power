import React from 'React';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ClassItemPropType } from '../../../../util/propTypes';

import styles from './ClassItem.css'

function ClassItem(props){
  return (
    <Card className={styles.card}>
     <CardActionArea>
       <CardMedia
         className={styles.media}
         image="https://res.cloudinary.com/gavinching/image/upload/q_80/v1543037858/Classroom_Lighting_yynd7x.jpg"
         title="Contemplative Reptile"
       />
       <CardContent>
         <Typography gutterBottom variant="h5" component="h2">
           {props.classItem.name}
         </Typography>
         <Typography component="p">
           Sunday - 8:00PM - 9:00PM
         </Typography>
       </CardContent>
     </CardActionArea>
     <CardActions>
       <Button size="small" color="primary">
         Students
       </Button>
       <Button size="small" color="primary">
         Attendance
       </Button>
     </CardActions>
   </Card>
  )
}

ClassItem.propTypes = ClassItemPropType

export default ClassItem;
