export const deportes = {
    "deportes": [
      {
        nombre: "Fútbol",
        descripcion: "Un deporte de equipo jugado entre dos equipos de 11 jugadores con una pelota esférica.",
        requerimientos: "Balón, cancha de fútbol, equipo de protección.",
        ranking: 5
      },
      {
        nombre: "Tenis",
        descripcion: "Un deporte de raqueta que se juega en una cancha con una red en el medio.",
        requerimientos: "Raqueta, pelotas de tenis, cancha.",
        ranking: 4
      },
      {
        nombre: "Natación",
        descripcion: "Un deporte que implica nadar en el agua en diversas modalidades.",
        requerimientos: "Piscina, traje de baño, gafas de natación.",
        ranking: 3
      },
      {
        nombre: "Baloncesto",
        descripcion: "Deporte jugado entre dos equipos de cinco jugadores en una cancha con un aro en cada extremo.",
        requerimientos: "Balón de baloncesto, cancha, canasta.",
        ranking: 5
      },
      {
        nombre: "Ciclismo",
        descripcion: "Deporte que involucra el uso de bicicletas en diversas modalidades, como carreras o rutas recreativas.",
        requerimientos: "Bicicleta, casco, ropa adecuada.",
        ranking: 4
      },
      {
        nombre: "Voleibol",
        descripcion: "Deporte en equipo jugado entre dos equipos de seis jugadores en una cancha dividida por una red.",
        requerimientos: "Balón de voleibol, cancha, red.",
        ranking: 4
      },
      {
        nombre: "Boxeo",
        descripcion: "Deporte de combate en el que dos personas se enfrentan en un ring usando guantes de boxeo.",
        requerimientos: "Guantes de boxeo, casco, ring.",
        ranking: 3
      },
      {
        nombre: "Atletismo",
        descripcion: "Deporte que incluye una variedad de disciplinas, como carreras, saltos y lanzamientos.",
        requerimientos: "Pista de atletismo, zapatillas deportivas.",
        ranking: 4
      },
      {
        nombre: "Rugby",
        descripcion: "Deporte de contacto jugado por equipos de 15 jugadores con una pelota ovalada.",
        requerimientos: "Balón de rugby, cancha, equipo de protección.",
        ranking: 3
      },
      {
        nombre: "Golf",
        descripcion: "Deporte donde los jugadores usan palos para golpear una pelota en un hoyo en el menor número de golpes posible.",
        requerimientos: "Pelota de golf, palos, campo de golf.",
        ranking: 1
      },
      {
        nombre: "Hockey sobre Hielo",
        descripcion: "Deporte de equipo jugado en una pista de hielo, donde los jugadores usan palos para mover un disco.",
        requerimientos: "Palo de hockey, patines, disco, pista de hielo.",
        ranking: 4
      }
    ]
  };
  
  deportes.deportes.sort((a, b) => b.ranking - a.ranking);
