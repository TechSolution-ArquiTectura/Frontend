Feature: Elegir número de estrellas en la reseña
    Como usuario de TuCine quiero tener la posibilidad de calificar a la aplicación mediante estrellas para que el público pueda ver a simple vista mi nivel de satisfacción con la experiencia de uso del programa

  Scenario: Cinéfilo redacta reseña y desea calificar con estrellas
    Given un cinéfilo se encuentre redactando una reseña
    And quiera calificar su experiencia a través de estrellas
    When presione alguna de las cinco estrellas ubicadas en la parte superior de la caja de comentarios
    Then se registrará la valoración indicada
