Feature: Buscar películas por parámetros
    Como cinéfilo quierobuscar películas por parámetros para obtener resultados de búsqueda precisos

  Scenario: Buscar película por nombre
    Given el usuario seleccionó la barra de búsqueda
    When ingresa el nombre de la película
    Then el sistema le mostrará la película buscada

  Scenario: Buscar película por director
    Given el usuario seleccione la barra de búsqueda
    When ingresa el nombre del director de la película
    Then el sistema le mostrará la película buscada

  Scenario: No existe la película
    Given el usuario seleccione la barra de búsqueda
    When ingresa información de la película
    Then el sistema le mostrará un texto indicando que no está la película
