import styles from "./main.module.css";
import { ReactNode } from "react";
import { PostMain } from "../../components/Posts/PostMain";

interface MainProps {
	// children - специальный проп(необязательно передавать его как атрибут у компонента),
	// позволяет принять контент(от родителя), который мы указываем между открывающим и закрывающим тегом
	// Контент имеет строго тип ReactNode, что является любым тегом/компонентом/текстовым узлом и тд
	// Проп можно сделать необязательным
	children?: ReactNode;
}

export function Main(props: MainProps) {
	const { children } = props;

	// return(
	//     <main className={styles.main}>
	//         <div className={styles.centeredContent}>
	//             <MainMessage></MainMessage>
	//             <Technologia></Technologia>
	//         </div>
	//     </main>
	// )

	return (
		<main className={styles.main}>
			<div className={styles.centeredContentRow}>
				<PostMain></PostMain>
			</div>
		</main>
	);
}
