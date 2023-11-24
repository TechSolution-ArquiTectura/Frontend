Feature: Editar cuentas de negocio
    Como propietario quiero tener la opción de gestionar una cuenta de negocio afiliada a mi cuenta propietario para manejar y alterar datos de mi cuenta negocio

  Scenario: Ingresar a cuenta negocio
    Given el usuario ingreso a la sección “Negocios afiliados”
    And el sistema le muestra todos los negocios
    When elige un “negocio”
    Then el sistema le mostrará toda la información del negocio

  Scenario: Editar a cuenta negocio
    Given el usuario ingresó a un negocio
    And el sistema le muestra todos los negocios
    When elige la opción “editar negocio”
    Then el sistema le permitirá editar toda la información del negocio
