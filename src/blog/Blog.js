import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Header from "./Header";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import Footer from "./Footer";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));
const useStylesForCard = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const sections = [
  { title: "Technology", url: "#" },
  { title: "Design", url: "#" },
  { title: "Culture", url: "#" },
  { title: "Business", url: "#" },
  { title: "Politics", url: "#" },
  { title: "Opinion", url: "#" },
  { title: "Science", url: "#" },
  { title: "Health", url: "#" },
  { title: "Style", url: "#" },
  { title: "Travel", url: "#" },
];

const mainFeaturedPost = {
  title: "Uso del acelerometro en el algoritmo de Contact Traicing",
  description:
    "Sobre como el algoritmo trata la zona segura , y la no contemplacion en casos de la presencia de un vehiculo en el calculo de la ruta de contagio",
  image: "https://cdn.pixabay.com/photo/2020/03/21/07/48/epidemic-4952933_960_720.jpg",
  imgText: "main image description",
};

const featuredPosts = [
  {
    title: "Contemplacion del algoritmo actual",
    description:
      "Sobre como el algoritmo trata la zona segura , y la no contemplacion en casos de la presencia de un vehiculo en el calculo de la ruta de contagio , el algoritmo asume 2 metros como distancia segura y se basa principalmente en el alcance del Bluetooth.",
    image: "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg",
  },
  {
    title: "Uso del acelerometro en el algoritmo ",
    description:
      "El uso de los parametros brindados en el algoritmo harian que el mismo de resultados mas exactos y provea un seguimento mas riguroso tomando en cuenta la variable del movil y de la distancia segura para cada uno de ellos.",
    image: "https://cdn.pixabay.com/photo/2020/07/03/23/56/capacitors-5367873_960_720.jpg",
  },
];

export default function Blog() {
  const classes = useStyles();
  const classesCard = useStylesForCard();
  const [expanded, setExpanded] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);
  const [expanded3, setExpanded3] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };
  const handleExpandClick3 = () => {
    setExpanded3(!expanded3);
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
        <>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post, index) => (
              <FeaturedPost key={index} post={post} />
            ))}
          </Grid>
          <Container maxWidth="lg">
            <Grid container spacing={4} className={classes.mainGrid}>
              <Card className={classes.root} style={{ marginBottom: "10px" }}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      01
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="La app y los dos metros de distancia segura"
                  subheader="Julio 26, 2020"
                />
                <CardMedia
                  className={classes.media}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Inicialmente la recoleccion de la data necesaria se hace a
                    partir del uso del Bluetooth y el GPS del dispositivo y el
                    algoritmo lo procesa y devuelve un porcentaje de contagio,
                    La distancia segura es dos metros y depende del hardware del
                    dispositivo .
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="+"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>
                      Los dos metros y las limitaciones del hardware
                    </Typography>
                    <Typography paragraph>
                      La app "protege" a las personas en un rango de dos metros
                      basada principalmente en el alcance de la intensidad de la
                      señal del Bluetooth del dispositivo que tenga el usuario
                      {"("} es un algoritmo que contempla el hardware, y su
                      pensamos en el fin del Bluetooth este mismo no fue pensado
                      para medir distancias , sino para transferencia de
                      archivos{")"}.
                    </Typography>
                    <Typography paragraph>
                      El principal problema de la app , es que esta considera
                      que los dos metros es la distancia segura , lo cual es
                      cierto para {"("} ej.dos personas que se cruzan en la
                      calle {")"} , pero no para alguien que va un vehiculo{" "}
                      {"("}ej. bicicleta o moto{")"} , en este caso el rango
                      seguro no son dos metros
                      {"("}ej.Imaginemos que hay una persona contagiada que va
                      en moto y se cruza con una persona que va caminando por la
                      calle ; en este caso podriamos decir que el rango seguro
                      es no menor de cinco metros , esto debido a la propagacion
                      del virus por "spray" es decir la capacidad de mantenerse
                      en el aire{")"} . Como vemos la distancia segura varia
                      segun los factores de movimiento(vehiculos).
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
              <Card className={classes.root} style={{ marginBottom: "10px" }}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      02
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Una posible solucion"
                  subheader="Julio 26, 2020"
                />
                <CardMedia
                  className={classes.media}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Como el uso del acelerometro puede mejorar el algoritmo,
                    haciendo uso no intrusivo y eficiente del mismo , detecta la
                    distancia segura segun el movil en el que se translada una
                    persona que posiblemente este infectada.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick2}
                    aria-expanded={expanded2}
                    aria-label="+"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse in={expanded2} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>
                      Una solucion que complementa y mejora el algoritmo
                    </Typography>
                    <Typography paragraph>
                      La app "protege" a las personas en un rango de dos metros
                      basada principalmente en el alcance de la intensidad de la
                      señal del Bluetooth del dispositivo que tenga el usuario
                      {"("} es un algoritmo que contempla el hardware, y su
                      pensamos en el fin del Bluetooth este mismo no fue pensado
                      para medir distancias , sino para transferencia de
                      archivos{")"}. Como podemos solucionar este "pitfall" ,
                      una manera eficiente y no intrusiva seria hacer uso del
                      acelerometro , el cual basicamente serviria para saber si
                      el usuario esta en un vehiculo y hacer el calculo
                      distancia segura- velocidad {"("} ej. No es lo msimo dos
                      personas que estan en un carro y moto respectivamente ,
                      que dos que no o una con moto y otra pesona a pie {")"}.
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
              <Card className={classes.root} >
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      03
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Un caso de estudio en la comunidad , usando el flag "
                  subheader="Julio 26, 2020"
                />
                <CardMedia
                  className={classes.media}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    La veriguacion de la distancias de cada vehiculo
                    enparticular depende en gran medida de hacer los
                    experiemntos ncesarios en campo , para determinar un
                    porcentaje con mayor presicion
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick3}
                    aria-expanded={expanded3}
                    aria-label="+"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse in={expanded3} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>
                      El transporte publico 
                    </Typography>
                    <Typography paragraph>

                      Dado el caso Una persona A se encuentra viajando enun bus de servicio publico ,
                      todos los dispositivos al rededor del mismo activarian este flag , 
                      que para empezar indicaria que estan en una combi y en el caso de haber una persona 
                      contagiada el rastreo seria mas eficiente .

                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
          </Container>
        </>
      </Container>
      <Footer
        title="Josue Retamozo Vargas"
        description="Hackaton Covid-19   2020"
      />
    </React.Fragment>
  );
}
