var app = new Vue({
  el: "#main",
  data: {
    currentPiece: "",
    playing: false,
    pieces: [
      {
        id: "123",
        title: "Jacob Collier: Piano Improvisation",
        iframe: "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/lYAxL7P04YY\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>",
        totalTime: 0,
        sessionTime: 0
      }
    ]
  },

  methods: {
    selected(piece) {
      if (this.currentPiece == piece.id) {
        return true;
      }
      return false;
    },

    select(piece) {
      this.currentPiece = piece.id;
    }
  }
})
