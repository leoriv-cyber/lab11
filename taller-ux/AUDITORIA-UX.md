# Auditoría y Rediseño de UX/UI - App de Notas

## 1. Tabla de las 5 Heurísticas
| Heurística | Problema detectado | Solución aplicada |
| :--- | :--- | :--- |
| **Visibilidad del estado** | No se sabía si una nota se guardaba o borraba. | Mensaje flotante tipo notificación tras cada acción. |
| **Control y libertad** | La eliminación de notas era irreversible. | Botón "Deshacer" al eliminar una nota. |
| **Prevención de errores** | Se podían enviar notas vacías. | Validación que bloquea campos vacíos. |
| **Reconocimiento antes que recuerdo** | Interfaz confusa y sin etiquetas claras. | Etiquetas `<label>` explícitas e indicadores de foco. |
| **Diseño estético y minimalista** | Espaciado y contraste deficientes. | Variables CSS, jerarquía clara y botones de 44px. |

---

## 2. Leyes de UX
* **Ley de Fitts:** Botones con altura mínima de 44px para facilitar el clic.
* **Ley de Hick:** Formularios reducidos únicamente a título y contenido.
* **Ley de Miller:** Layout organizado en tarjetas para no saturar la vista.

---

## 3. Auditoría de Accesibilidad (Lighthouse)

### Antes del Rediseño
*(Insertar captura previa)*

### Después del Rediseño
*(Insertar captura con puntaje >= 90)*