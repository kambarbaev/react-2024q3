import { People } from '@services/index';

export function createCvsFile(selectedCard: People[]) {
  const csv = selectedCard!.map((card) => {
    return `${card.name},${card.height},${card.mass},${card.gender},${card.birth_year}`;
  });
  const fileName = selectedCard!.length > 1 ? `${selectedCard?.length}_people` : selectedCard![0].name;

  const csvData = csv.join('\n');
  const blob = new Blob([csvData], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${fileName}.csv`;
  a.click();
}
