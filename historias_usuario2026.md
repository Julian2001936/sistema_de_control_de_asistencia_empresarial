Historias de Usuario
Sistema de Control de Asistencia Empresarial


ÉPICA 1: Autenticación y acceso

HU-01: Inicio de sesión
Como administrador,
quiero iniciar sesión en el sistema,
para acceder a la gestión de empleados y asistencia.

Criterios de aceptación:
- El sistema permite ingresar usuario y contraseña
- El sistema valida las credenciales
- El sistema muestra un mensaje de error si son incorrectas


HU-02: Cierre de sesión
Como usuario,
quiero cerrar sesión,
para proteger el acceso al sistema.

Criterios de aceptación:
- El sistema cierra la sesión activa
- El sistema redirige a la pantalla de inicio de sesión


ÉPICA 2: Gestión de empleados

HU-03: Registrar empleado
Como administrador,
quiero registrar un nuevo empleado,
para incluirlo en el sistema de asistencia.

Criterios de aceptación:
- El sistema permite ingresar datos del empleado
- El sistema valida que no existan campos vacíos
- El sistema guarda la información correctamente


HU-04: Consultar empleados
Como administrador,
quiero ver la lista de empleados,
para gestionar la información registrada.

Criterios de aceptación:
- El sistema muestra todos los empleados registrados
- La información se presenta de forma clara y organizada


HU-05: Editar empleado
Como administrador,
quiero modificar los datos de un empleado,
para mantener la información actualizada.

Criterios de aceptación:
- El sistema permite editar los datos existentes
- El sistema guarda los cambios correctamente


HU-06: Eliminar empleado
Como administrador,
quiero eliminar un empleado,
para mantener actualizada la base de datos.

Criterios de aceptación:
- El sistema solicita confirmación antes de eliminar
- El sistema elimina el registro correctamente


ÉPICA 3: Control de asistencia

HU-07: Registrar entrada
Como empleado,
quiero registrar mi hora de entrada,
para iniciar mi jornada laboral.

Criterios de aceptación:
- El sistema registra la fecha y hora automáticamente
- El registro se asocia al empleado correspondiente


HU-08: Registrar salida
Como empleado,
quiero registrar mi hora de salida,
para finalizar mi jornada laboral.

Criterios de aceptación:
- El sistema guarda la hora de salida
- Debe existir un registro previo de entrada


HU-09: Consultar asistencia diaria
Como administrador,
quiero ver la asistencia por día,
para verificar quién asistió.

Criterios de aceptación:
- El sistema permite seleccionar una fecha
- El sistema muestra todos los registros del día


HU-10: Consultar asistencia por empleado
Como administrador,
quiero consultar la asistencia de un empleado,
para evaluar su cumplimiento laboral.

Criterios de aceptación:
- El sistema permite filtrar por empleado
- El sistema muestra el historial completo


HU-11: Listar registros de asistencia
Como administrador,
quiero ver todos los registros de asistencia,
para tener control general del sistema.

Criterios de aceptación:
- El sistema muestra la lista completa de registros
- La información incluye fecha, hora y empleado


ÉPICA 4: Validaciones y reglas del sistema

HU-12: Validar datos obligatorios
Como sistema,
quiero validar que los campos no estén vacíos,
para garantizar la integridad de los datos.

Criterios de aceptación:
- El sistema bloquea registros incompletos
- El sistema muestra mensajes de error


HU-13: Evitar registros duplicados
Como sistema,
quiero evitar registros duplicados de asistencia,
para mantener la consistencia de la información.

Criterios de aceptación:
- El sistema no permite duplicar registros en el mismo periodo
- El sistema notifica al usuario


HU-14: Validar secuencia de asistencia
Como sistema,
quiero asegurar que exista una entrada antes de una salida,
para mantener coherencia en los registros.

Criterios de aceptación:
- El sistema no permite registrar una salida sin una entrada previa


ÉPICA 5: Seguridad

HU-15: Control de acceso
Como sistema,
quiero restringir el acceso a usuarios autenticados,
para proteger la información.

Criterios de aceptación:
- El sistema bloquea el acceso sin autenticación
- El sistema redirige al inicio de sesión


HU-16: Protección de datos
Como sistema,
quiero proteger la información almacenada,
para evitar accesos no autorizados.

Criterios de aceptación:
- Solo usuarios autorizados pueden acceder a los datos
- El sistema mantiene la confidencialidad de la información
