import { execSync } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';

const commitMsgFile = process.argv[2];

const branchName = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();

const ticketPrefixMatch = branchName.match(/^[^/]+\/([A-Z]+-\d+)/);

if (ticketPrefixMatch) {
  const ticketPrefix = `[${ticketPrefixMatch[1]}] `;
  const commitMessage = readFileSync(commitMsgFile, 'utf8');

  if (!commitMessage.startsWith(ticketPrefix)) {
    writeFileSync(commitMsgFile, ticketPrefix + commitMessage);
  }
}
