
import React from 'react';
import { Drawer, Card, AutoComplete } from 'antd';
import { glossaryTerms } from '../../data/aiData';

interface GlossaryDrawerProps {
  glossaryVisible: boolean;
  setGlossaryVisible: (visible: boolean) => void;
}

export const GlossaryDrawer: React.FC<GlossaryDrawerProps> = ({
  glossaryVisible,
  setGlossaryVisible
}) => {
  return (
    <Drawer
      title="Glosario de Términos de IA"
      placement="right"
      onClose={() => setGlossaryVisible(false)}
      open={glossaryVisible}
      width={400}
    >
      <div className="space-y-6">
        {glossaryTerms.map((item, index) => (
          <Card key={index} size="small">
            <h4 className="font-semibold text-ai-primary mb-2">{item.term}</h4>
            <p className="text-sm text-muted-foreground">{item.definition}</p>
          </Card>
        ))}
      </div>
      
      <div className="mt-8">
        <AutoComplete
          style={{ width: '100%' }}
          placeholder="Buscar término..."
          options={glossaryTerms.map(term => ({ value: term.term }))}
        />
      </div>
    </Drawer>
  );
};
