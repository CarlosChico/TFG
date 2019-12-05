-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-12-2019 a las 10:30:31
-- Versión del servidor: 10.1.31-MariaDB
-- Versión de PHP: 7.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ecv_monitoring`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cuidador`
--

CREATE TABLE `cuidador` (
  `id_cuidador` int(11) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `apellidos` varchar(40) NOT NULL,
  `pwd` varchar(40) NOT NULL,
  `usuario_sip` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `enfermedad`
--

CREATE TABLE `enfermedad` (
  `id_enfermedad` int(20) NOT NULL,
  `nombre_enfermedad` varchar(30) NOT NULL,
  `descripcion` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `enfermedad`
--

INSERT INTO `enfermedad` (`id_enfermedad`, `nombre_enfermedad`, `descripcion`) VALUES
(2, 'Arritimia', 'Es un trastorno de la frecuencia cardíaca (pulso) o del ritmo cardíaco. El corazón puede latir demasiado rápido (taquicardia), demasiado lento (bradicardia) o de manera irregular. Una arritmia puede no causar daño, ser una señal de otros problemas cardíacos o un peligro inmediato para su salud.'),
(3, 'Infarto de miocarido', 'El infarto de miocardio es una patología que se caracteriza por la muerte de una porción del músculo cardíaco que se produce cuando se obstruye completamente una arteria coronaria. En las circunstancias en las que se produce la obstrucción el aporte sanguíneo se suprime.'),
(6, 'Aneurisma de aorta', 'Un aneurisma es una dilatación o ensanchamiento anormal de una porción de una arteria, debido a una debilidad de la pared del vaso sanguíneo. Un aneurisma de la aorta torácica se presenta en la parte de la mayor arteria del cuerpo (la aorta) que pasa a través del tórax.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `enfermedades_has_usuarios`
--

CREATE TABLE `enfermedades_has_usuarios` (
  `usuario_sip` int(20) NOT NULL,
  `id_enfermedad` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `enfermedades_has_usuarios`
--

INSERT INTO `enfermedades_has_usuarios` (`usuario_sip`, `id_enfermedad`) VALUES
(84528763, 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medicacion`
--

CREATE TABLE `medicacion` (
  `id_medicacion` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `descripcion` varchar(400) NOT NULL,
  `efectos_adversos` varchar(400) NOT NULL,
  `img` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `medicacion`
--

INSERT INTO `medicacion` (`id_medicacion`, `nombre`, `descripcion`, `efectos_adversos`, `img`) VALUES
(2, 'Clopidogrel tabletas', 'Clopidogrel Tarbis pertenece a un grupo de medicamentos denominados antiagregantes plaquetarios. Las plaquetas son unas células muy pequeñas que se encuentran en la sangre, son más pequeñas que los glóbulos rojos o blancos, y se agregan cuando la sangre se coagula. Los medicamentos antiagregantes plaquetarios al prevenir dicha agregación, reducen la posibilidad de que se produzcan coágulos sanguín', 'Fiebre, signos de infección o cansancio grave. Estos síntomas pueden deberse a un raro descenso de algunas células de la sangre. ', 'clopidogrel.jpg'),
(4, 'Sintrom', 'Sintrom es un medicamento que contiene el principio activo acenocumarol. El acenocumarol pertenece al grupo de medicamentos denominados anticoagulantes, que disminuyen la capacidad de coagular de la sangre y por tanto, ayudan a prevenir la formación de coágulos en los vasos sanguíneos.', 'Hemorragias, sangrados intensos inusuales o sangrado de cortes o heridas. Reacción alérgica en forma de erupción cutánea o picores. Color amarillento en los ojos o la piel.', 'sintrom.jpg'),
(56, 'Pentoxifilina', 'Pentoxifilina Alter se utiliza en el tratamiento de los trastornos de la circulación periférica debidos a arterioesclerosis (enfermedad que se produce por acúmulo excesivo de colesterol en las arterias), diabetes, inflamación u otras causas.', 'Con frecuencia sofocos, alteraciones del estómago como presión en el estómago, sensación de plenitud (pesadez de estómago), náuseas, vómitos o diarreas y ocasionalmente alteración del ritmo de los lat', 'pentoxifilina.jpg'),
(57, 'Heparina', 'Sustancia anticoagulante natural que existe normalmente en todos los tejidos del cuerpo humano, especialmente en el hígado, los pulmones y los músculos.', 'Se pueden producir moretones, dolores musculares, caída del cabello. Raramente se puede dar sangrado en la orina o vómitos', 'heparina.jpg'),
(60, 'Coronut', 'Contiene mononitrato de isosorbida como principio activo, el cual pertenece a un grupo de medicamentos conocidos como nitratos que poseen propiedades vasodilatadoras de las arterias coronarias del corazón.\r\nEste medicamento está indicado para el tratamiento y la prevención de la angina de pecho', 'En ciertos casos, especialmente con dosis altas, o al principio del tratamiento, puede producirse hipotensión ortostática (sensación de mareo al levantarse). En pacientes especialmente sensibles, la h', 'coronur.jpeg'),
(62, 'Adiro', 'El ácido acetilsalicílico, a la dosis presente en este medicamento, pertenece al grupo de medicamentos denominados antiagregantes plaquetarios. Las plaquetas son unos componentes de la sangre, más pequeños que los glóbulos rojos y blancos, que se agregan cuando la sangre coagula.', 'Debido a su efecto sobre la agregación plaquetaria, el ácido acetilsalicílico puede aumentar el riesgo de sangrado y producirse anemia aguda o crónica, o bien anemia por falta de hierro, con los corre', 'adiro.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medicacion_has_enfermedad`
--

CREATE TABLE `medicacion_has_enfermedad` (
  `id_enfermedad` int(20) NOT NULL,
  `id_medicacion` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `medicacion_has_enfermedad`
--

INSERT INTO `medicacion_has_enfermedad` (`id_enfermedad`, `id_medicacion`) VALUES
(2, 2),
(6, 57);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medico`
--

CREATE TABLE `medico` (
  `colegiado` int(20) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `apellidos` varchar(40) NOT NULL,
  `pwd` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `medico`
--

INSERT INTO `medico` (`colegiado`, `nombre`, `apellidos`, `pwd`) VALUES
(1234567890, 'Irene', 'Cases Durán', '$2a$10$IrUig8gpRTqCxGUhRaOUGuXWyH8znHqj3');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mensaje`
--

CREATE TABLE `mensaje` (
  `id_mensaje` int(11) NOT NULL,
  `contenido` varchar(200) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `msg_usuario` int(20) NOT NULL,
  `msg_medico` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pulsera`
--

CREATE TABLE `pulsera` (
  `id_pulsera` int(20) NOT NULL,
  `ritmo` int(3) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `usuario_sip` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `pulsera`
--

INSERT INTO `pulsera` (`id_pulsera`, `ritmo`, `fecha`, `usuario_sip`) VALUES
(21, 120, '2019-08-28 17:31:15', 84528763),
(22, 51, '2019-08-28 17:31:26', 84528763),
(23, 57, '2019-08-28 17:31:35', 84528763),
(24, 111, '2019-08-28 17:31:44', 84528763),
(25, 67, '2019-08-28 17:31:53', 84528763),
(26, 52, '2019-08-28 17:32:05', 84528763),
(27, 119, '2019-08-28 17:32:13', 84528763);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recomendacion`
--

CREATE TABLE `recomendacion` (
  `id_recomendacion` int(20) NOT NULL,
  `titulo` varchar(30) NOT NULL,
  `descripcion` varchar(400) NOT NULL,
  `img` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `recomendacion`
--

INSERT INTO `recomendacion` (`id_recomendacion`, `titulo`, `descripcion`, `img`) VALUES
(1, 'Hacer deporte moderado', 'La intensidad de la actividad física. La intensidad refleja la velocidad a la que se realiza la actividad, o la magnitud del esfuerzo requerido para realizar un ejercicio o actividad.', 'running.jpg'),
(4, 'Comer de forma saludable', 'Una alimentación saludable consiste en ingerir una variedad de alimentos que te brinden los nutrientes que necesitas para mantenerte sana, sentirte bien y tener energía. Estos nutrientes incluyen las proteínas, los carbohidratos, las grasas, el agua, las vitaminas y los minerales.', 'saludable.jpg'),
(13, 'Beber suficiente agua', 'Los estudios establecieron diversas recomendaciones a lo largo de los años. Pero tus necesidades individuales de agua dependen de muchos factores, como tu salud, el nivel de actividad y dónde vives.', 'beber.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recomendacion_has_enfermedad`
--

CREATE TABLE `recomendacion_has_enfermedad` (
  `id_enfermedad` int(20) NOT NULL,
  `id_recomendacion` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `recomendacion_has_enfermedad`
--

INSERT INTO `recomendacion_has_enfermedad` (`id_enfermedad`, `id_recomendacion`) VALUES
(2, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `umbral`
--

CREATE TABLE `umbral` (
  `id_umbral` int(20) NOT NULL,
  `nombre` enum('superior','inferior') NOT NULL,
  `ritmo` int(3) NOT NULL,
  `usuario_sip` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `umbral`
--

INSERT INTO `umbral` (`id_umbral`, `nombre`, `ritmo`, `usuario_sip`) VALUES
(5, 'superior', 117, 84528763),
(6, 'inferior', 54, 84528763);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `sip` int(20) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `apellidos` varchar(40) NOT NULL,
  `pwd` varchar(40) NOT NULL,
  `edad` int(3) NOT NULL,
  `peso` float NOT NULL,
  `genero` set('hombre','mujer') NOT NULL,
  `medico` int(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`sip`, `nombre`, `apellidos`, `pwd`, `edad`, `peso`, `genero`, `medico`) VALUES
(14528763, 'Fátima', 'Gutierrez Diez', '14528763', 43, 61, 'mujer', 1234567890),
(43265712, 'Alba', 'Giménez Sánchez', '$2a$09$4Wf2bLfqqnFJZVhLKS05Dufp/r.D30xkP', 34, 65, 'mujer', 1234567890),
(65423124, 'Remedios', 'Martínez Fernandez', '65423124', 65, 66, 'mujer', 1234567890),
(84528763, 'Juan', 'Martínez Oller', '84528763', 89, 73, 'hombre', 1234567890),
(92343653, 'Manuel', 'Ñiguez Muñoz', '92343653', 33, 87, 'hombre', 1234567890);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cuidador`
--
ALTER TABLE `cuidador`
  ADD PRIMARY KEY (`id_cuidador`),
  ADD KEY `FK_usuario_sip` (`usuario_sip`);

--
-- Indices de la tabla `enfermedad`
--
ALTER TABLE `enfermedad`
  ADD PRIMARY KEY (`id_enfermedad`);

--
-- Indices de la tabla `enfermedades_has_usuarios`
--
ALTER TABLE `enfermedades_has_usuarios`
  ADD PRIMARY KEY (`usuario_sip`,`id_enfermedad`),
  ADD KEY `FK_usuario_sip` (`usuario_sip`),
  ADD KEY `FK_id_enfermedad` (`id_enfermedad`);

--
-- Indices de la tabla `medicacion`
--
ALTER TABLE `medicacion`
  ADD PRIMARY KEY (`id_medicacion`);

--
-- Indices de la tabla `medicacion_has_enfermedad`
--
ALTER TABLE `medicacion_has_enfermedad`
  ADD PRIMARY KEY (`id_enfermedad`,`id_medicacion`),
  ADD KEY `FK_id_medicacion` (`id_medicacion`),
  ADD KEY `FK_id_enfermedad` (`id_enfermedad`);

--
-- Indices de la tabla `medico`
--
ALTER TABLE `medico`
  ADD PRIMARY KEY (`colegiado`);

--
-- Indices de la tabla `mensaje`
--
ALTER TABLE `mensaje`
  ADD PRIMARY KEY (`id_mensaje`),
  ADD KEY `FK_id_usuario` (`msg_usuario`),
  ADD KEY `FK_id_medico` (`msg_medico`);

--
-- Indices de la tabla `pulsera`
--
ALTER TABLE `pulsera`
  ADD PRIMARY KEY (`id_pulsera`),
  ADD KEY `FK_usuario_sip` (`usuario_sip`);

--
-- Indices de la tabla `recomendacion`
--
ALTER TABLE `recomendacion`
  ADD PRIMARY KEY (`id_recomendacion`),
  ADD UNIQUE KEY `titulo` (`titulo`);

--
-- Indices de la tabla `recomendacion_has_enfermedad`
--
ALTER TABLE `recomendacion_has_enfermedad`
  ADD PRIMARY KEY (`id_enfermedad`,`id_recomendacion`),
  ADD KEY `FK_id_enfermedad` (`id_enfermedad`),
  ADD KEY `FK_id_recomendacion` (`id_recomendacion`);

--
-- Indices de la tabla `umbral`
--
ALTER TABLE `umbral`
  ADD PRIMARY KEY (`id_umbral`),
  ADD KEY `FK_usuario_sip` (`usuario_sip`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`sip`),
  ADD KEY `FK_medico_coelgiado` (`medico`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cuidador`
--
ALTER TABLE `cuidador`
  MODIFY `id_cuidador` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `enfermedad`
--
ALTER TABLE `enfermedad`
  MODIFY `id_enfermedad` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `medicacion`
--
ALTER TABLE `medicacion`
  MODIFY `id_medicacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT de la tabla `mensaje`
--
ALTER TABLE `mensaje`
  MODIFY `id_mensaje` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pulsera`
--
ALTER TABLE `pulsera`
  MODIFY `id_pulsera` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de la tabla `recomendacion`
--
ALTER TABLE `recomendacion`
  MODIFY `id_recomendacion` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `umbral`
--
ALTER TABLE `umbral`
  MODIFY `id_umbral` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cuidador`
--
ALTER TABLE `cuidador`
  ADD CONSTRAINT `cuida_a` FOREIGN KEY (`usuario_sip`) REFERENCES `usuario` (`sip`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `enfermedades_has_usuarios`
--
ALTER TABLE `enfermedades_has_usuarios`
  ADD CONSTRAINT `enfermedad_padecida` FOREIGN KEY (`id_enfermedad`) REFERENCES `enfermedad` (`id_enfermedad`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `usuario_padece` FOREIGN KEY (`usuario_sip`) REFERENCES `usuario` (`sip`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `medicacion_has_enfermedad`
--
ALTER TABLE `medicacion_has_enfermedad`
  ADD CONSTRAINT `enfermedad_tratada` FOREIGN KEY (`id_enfermedad`) REFERENCES `enfermedad` (`id_enfermedad`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `medicacion_usada` FOREIGN KEY (`id_medicacion`) REFERENCES `medicacion` (`id_medicacion`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `mensaje`
--
ALTER TABLE `mensaje`
  ADD CONSTRAINT `interviene_medico` FOREIGN KEY (`msg_medico`) REFERENCES `medico` (`colegiado`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `interviene_usuario` FOREIGN KEY (`msg_usuario`) REFERENCES `usuario` (`sip`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `pulsera`
--
ALTER TABLE `pulsera`
  ADD CONSTRAINT `registro_de` FOREIGN KEY (`usuario_sip`) REFERENCES `usuario` (`sip`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `recomendacion_has_enfermedad`
--
ALTER TABLE `recomendacion_has_enfermedad`
  ADD CONSTRAINT `recomendacion_para` FOREIGN KEY (`id_recomendacion`) REFERENCES `recomendacion` (`id_recomendacion`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `utilizada_por` FOREIGN KEY (`id_enfermedad`) REFERENCES `enfermedad` (`id_enfermedad`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `umbral`
--
ALTER TABLE `umbral`
  ADD CONSTRAINT `umbral_de` FOREIGN KEY (`usuario_sip`) REFERENCES `usuario` (`sip`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `es_supervisado_por` FOREIGN KEY (`medico`) REFERENCES `medico` (`colegiado`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
