async function createNote({ trigger, foam, resolver }) {
    const title = (await resolver.resolveFromName('FOAM_TITLE'))
    const safeTitle = (await resolver.resolveFromName('FOAM_TITLE_SAFE'))
    const now = new Date();

    return {
        content: `# ${title}\r\n`,
        filepath: `/Articles/${now.getFullYear()}/Q${Math.floor(now.getMonth() / 3) + 1}/${safeTitle}.md`,
    };
}