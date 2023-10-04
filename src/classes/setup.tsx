import { Table } from 'react-bootstrap';
import { TerrainLocation, getTerrainLocations } from './terrains';
import { shuffle } from '../util/generic';


const coastalLocations = getTerrainLocations({ coastal: true });

/**
 * Gets all coastal TerrainLocations, shuffles them, and returns 3. For boat
 * placement in Setup.
 * @returns Three random TerrainLocations that are valid locations for boats.
 */
export function randomizeSkelligeBoatStartingLocations(): TerrainLocation[] {
    const locs = shuffle(coastalLocations).slice(0, 3);
    return locs.slice(0, 3);
}


/**
 * Generates a string composed of the expansion names in order to access the translation key in
 * locales/[lang]/translation.json
 * @param w Wild Hunt expansion boolean
 * @param m Mages expansion boolean
 * @param mT Monster Trail expansion boolean
 * @returns Constructed string composed of the expansions used for translation key
 */
export function playerSetup(w: boolean, m: boolean, mT: boolean) {
    let name = "base";
    if (w) name = "wildHunt";
    if (m) name += "Mages";
    if (mT) name += "MonsterTrail";
    return "setupHelper.base.playerSetup." + name;
}


// TODO: update this to a functional component
export function compileSteps(
    t,
    legendaryHunt = false,
    mages = false,
    monsterPack = false,
    monsterTrail = false,
    skellige = false,
    adventurePack = false,
    wildHunt = false,
    numPlayers = 1,
) {
    if (numPlayers < 1 || numPlayers > 5) {
        throw new Error(t('setupHelper.error'));
    }

    const finalSteps: any[] = [];
    let tempElem = {}, tempArr: any[] = [];

    finalSteps.push(t('setupHelper.base.1'));
    if (legendaryHunt) finalSteps.push(t('setupHelper.legendaryHunt.help'));

    if (wildHunt) {
        finalSteps.push(
            <div>
                {t('setupHelper.wildHunt.difficultyTitle')}
                <Table className='lh-base' style={{ tableLayout: 'fixed' }}>
                    <thead style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                        <tr>
                            <th>{t('setupHelper.wildHunt.easy')}</th>
                            <th>{t('setupHelper.wildHunt.medium')}</th>
                            <th>{t('setupHelper.wildHunt.hard')}</th>
                            <th>{t('setupHelper.wildHunt.veryHard')}</th>
                        </tr>
                    </thead>
                    <tbody style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                        <tr>
                            {t(`setupHelper.wildHunt.difficultyValues.${numPlayers}`).map((text, index) => (
                                <td key={index} style={{whiteSpace: 'pre-wrap', borderBottom: 'none'}}>{text}</td>
                            ))}
                        </tr>
                    </tbody>
                </Table>
            </div>
        );

        finalSteps.push(t('setupHelper.wildHunt.manage'));
    }

    const locations = randomizeSkelligeBoatStartingLocations();
    if (skellige) {
        finalSteps.push(
            <div>
                {t('setupHelper.skellige.playmat.0')}
                <ul>
                    <li key={0}>{t('setupHelper.skellige.playmat.1')}</li>
                    <li key={1}>{t('setupHelper.skellige.playmat.2')}
                        <ul>
                            {locations.map((loc: TerrainLocation, idx) => (
                                <li key={idx}>{t(`locationTokens.${loc.name}`)}, {loc.num}</li>
                            ))}
                        </ul>
                    </li>
                </ul>

                {t('setupHelper.skellige.board.0')}
                <ul>
                    <li>{t('setupHelper.skellige.board.1')}</li>
                    <li>{t('setupHelper.skellige.board.2')}</li>
                    <li>{t('setupHelper.skellige.board.3')}</li>
                    <li>{t('setupHelper.skellige.board.4')}</li>
                </ul>
            </div>
        );
    }

    // step
    finalSteps.push(t('setupHelper.base.actionCards'));

    // step
    if (mages) finalSteps.push(t('setupHelper.magesExp.actionCards'));

    // step
    finalSteps.push(t(`setupHelper.base.attrTrophies.${numPlayers}`));
    tempElem = {};

    // step
    if (monsterTrail) finalSteps.push(t('setupHelper.monsterTrail.mutagen'));

    // step
    finalSteps.push(t('setupHelper.base.potions'));

    // step
    if (monsterTrail) finalSteps.push(t('setupHelper.monsterTrail.bomb'));

    if (wildHunt) {
        finalSteps.push(t('setupHelper.wildHunt.createExplorationDeck', { num: numPlayers > 3 ? 3 : 4 }));
        finalSteps.push(t('setupHelper.wildHunt.decks'));
    } else {
        finalSteps.push(t('setupHelper.base.decks'));
        if (skellige) finalSteps.push(t('setupHelper.skellige.decks'));
        if (skellige && !wildHunt) finalSteps.push(t(`setupHelper.skellige.${monsterTrail ? 'dagonMT' : 'dagon'}`));
        if (monsterPack && skellige) finalSteps.push(t('setupHelper.skellige.siren'));
        tempElem = {};
    }

    // Adventure Pack and Wild Hunt are mutually exclusive
    let expansion = "base";
    if (adventurePack) expansion = "adventurePack";
    if (wildHunt) expansion = "wildHunt";
    finalSteps.push(t(`setupHelper.${expansion}.tokens`));
    finalSteps.push(t('setupHelper.base.locationTokens'));

    // create array of string list items to generate ordered list
    tempArr = [];
    tempArr.push(t('setupHelper.base.monsterSetup.0'));

    if (wildHunt) {
        tempArr.push(t('setupHelper.wildHunt.monsterSetup.0'));
        tempArr.push(t('setupHelper.wildHunt.monsterSetup.1'));
    } else {
        if (numPlayers > 3)
            tempArr.push(t('setupHelper.base.monsterSetup.1', { count: numPlayers - 3 }));
        tempArr.push(t(`setupHelper.base.monsterSetup.2.${numPlayers}`));
        tempArr.push(t('setupHelper.base.monsterSetup.3'));
        tempArr.push(t('setupHelper.base.monsterSetup.4'));
    }
    if (monsterTrail) tempArr.push(t('setupHelper.monsterTrail.lgCards'));

    tempElem = (
        <div>
            {t('setupHelper.base.monsterSetup.5')}
            <ol type='a'>
                {tempArr.map((text, id) => (
                    <li key={id}>{text}</li>
                ))}
            </ol>
        </div>
    );
    finalSteps.push(tempElem);
    tempElem = {}, tempArr = [];

    if (monsterTrail) finalSteps.push(t('setupHelper.monsterTrail.spFightCards'));

    wildHunt ? expansion = "wildHunt" : expansion = "base";
    finalSteps.push(t(`setupHelper.${expansion}.monsterFightDeck`));

    if (legendaryHunt) finalSteps.push(t('setupHelper.legendaryHunt.choose'));
    if (wildHunt) finalSteps.push(...t('setupHelper.wildHunt.enemies'));

    finalSteps.push(t('setupHelper.base.startingPlayer'));

    tempArr.push(t(playerSetup(wildHunt, mages, monsterTrail)));
    if (numPlayers > 1)
        tempArr.push(
            t('setupHelper.base.playerSetup.trophyCards', {
                context: mages ? "witchermagetrophy" : "witchertrophy",
                count: numPlayers - 1
            })
        );
    if (mages) tempArr.push(t('setupHelper.base.playerSetup.ifMage'));
    tempArr.push(t(`setupHelper.base.playerSetup.${mages ? 'markersMages' : 'markers'}`));
    if (numPlayers > 3) tempArr.push(t('setupHelper.base.playerSetup.raiseAttr'));
    if (!wildHunt) tempArr.push(t('setupHelper.base.playerSetup.token'));
    tempArr.push(t('setupHelper.base.playerSetup.cards'));
    tempArr.push(t('setupHelper.base.playerSetup.miniature'));

    if (wildHunt) {
        tempArr.push(t('setupHelper.base.playerSetup.drawWildHunt'));
    } else {
        tempArr.push(
            <>
                {t('setupHelper.base.playerSetup.drawBaseHeader')}
                <ul>
                    {t(`setupHelper.base.playerSetup.drawBaseResources.${numPlayers}`).map((text, index) => (
                        <li key={numPlayers + "-" + index}>{text}</li>
                    ))}
                </ul>
            </>
        );
    }
    tempElem = (
        <div>
            {t('setupHelper.base.playerSetup.title')}
            <ol type='a'>
                {tempArr.map((text, id) => (
                    <li key={id}>{text}</li>
                ))}
            </ol>
        </div>
    );
    finalSteps.push(tempElem);
    tempElem = {}, tempArr = [];

    if (numPlayers > 1 && wildHunt) finalSteps.push(t('setupHelper.wildHunt.movementPool'));
    if (monsterTrail) finalSteps.push(t('setupHelper.monsterTrail.weaknessTokens'));
    if (legendaryHunt) finalSteps.push(t('setupHelper.legendaryHunt.movementDeck'));
    if (adventurePack) finalSteps.push(t('setupHelper.adventurePack.lostMount'));

    return finalSteps;
}