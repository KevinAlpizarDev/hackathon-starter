
// import { useWindowWidth } from '../../hooks/useWindowWidth'; // If needed, uncomment to use the custom hook
// import { FWD } from '../../components/FWD';
import { ProjectLayout } from '../layout/ProjectLayout';
import { NothingSelectedView, NoteView } from '../views';
export const ProjectPage = () => {
    return (
        <ProjectLayout>
            {/* <NothingSelectedView /> */}
            <NoteView />


            <div class="fixed bottom-6 right-6">
                <div className=' bg-yellow-500 h-32 w-32 rounded-full p-4 text-white font-medium rounded-full flex items-center justify-center hover:bg-yellow-600 transition duration-300 ease-in-out shadow-lg'>

                    <svg xmlns="http://www.w3.org/2000/svg" height="80px" viewBox="0 -960 960 960" width="80px" fill="#5f6368"><path d="M400-304 240-464l56-56 104 104 264-264 56 56-320 320Z" /></svg>

                </div>

            </div>
        </ProjectLayout>
    );
};

// Explicación de los cambios con media queries:
// flex-col sm:flex-row en el contenedor principal (div):

// Por defecto (flex-col), el contenedor será de columna, lo que significa que los elementos se apilarán verticalmente.
// A partir del breakpoint sm (pantallas pequeñas y mayores), el diseño cambia a flex-row, lo que coloca los elementos en una fila (horizontal).
// w-full sm:w-1/4 en la barra de navegación:

// Por defecto, la barra de navegación (div) ocupará todo el ancho (w-full).
// A partir de sm, cambia a ocupar un 25% del ancho (w-1/4).
// space-x-8 sm:space-x-16 en el <ul> de la barra de navegación:

// space-x-8 establece un espaciado horizontal entre los elementos del ul.
// En pantallas pequeñas y mayores (con sm), el espaciado aumenta a space-x-16.
// w-full sm:w-32 en el aside:

// El aside ocupará todo el ancho en pantallas pequeñas (w-full).
// En pantallas más grandes (a partir de sm), cambiará a ocupar un ancho fijo de 8rem (w-32).
// p-4 sm:p-6 en el <div> del aside:

// El padding por defecto es de p-4 (16px) en todas las pantallas.
// En pantallas más grandes (a partir de sm), el padding aumenta a p-6 (24px).
// p-6 sm:p-10 en el contenido principal:

// El padding por defecto en el contenido principal es p-6.
// En pantallas pequeñas y mayores (con sm), el padding aumenta a p-10.
// Breakpoints de Tailwind:
// sm: Pantallas a partir de 640px.
// md: Pantallas a partir de 768px.
// lg: Pantallas a partir de 1024px.
// xl: Pantallas a partir de 1280px.
// 2xl: Pantallas a partir de 1536px.
// Resultado:
// En pantallas pequeñas, los elementos se apilarán verticalmente.
// En pantallas más grandes (por ejemplo, en tabletas y escritorios), los elementos se dispondrán horizontalmente, con barras laterales y contenido principal ajustados según el tamaño de la pantalla.
// Este enfoque de media queries te permite controlar cómo se presenta tu diseño en diferentes tamaños de pantalla sin tener que escribir CSS personalizado, utilizando solo las utilidades predeterminadas de TailwindCSS.



