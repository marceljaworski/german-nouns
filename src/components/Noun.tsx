import { INoun } from '../interfaces';

interface Iprops{
    noun: INoun;
    setNouns: any;
    nouns: INoun[];
    localStorageVariable: string;
}
export const Noun = (props: Iprops) => {
    const {noun, setNouns, nouns, localStorageVariable} = props;
    const saveState = () => {
		setNouns([...nouns]);
		localStorage.setItem(localStorageVariable, JSON.stringify(nouns));
	}
    const handleToggleFlashcard = (noun: INoun) => {
        noun.isOpen = !noun.isOpen;
        saveState();
    };
    const handleMarkAsLearned = (noun: INoun) => {
		noun.isLearned = true;
		saveState();
	};

	return (
		<>
			{!noun.isLearned && (
				<div className="noun">
					<div
						className="front"
						onClick={() => handleToggleFlashcard(noun)}
					>
						{noun.singular}
					</div>
					{noun.isOpen && (
						<>
							<div className="back">
								<div className="singular">
									{noun.article} {noun.singular}
								</div>
								<div className="plural">{noun.plural}</div>
								<button onClick={() => handleMarkAsLearned(noun)}>Mark as Learned</button>
							</div>
						</>
					)}
				</div>
			)}
		</>
	);

}

