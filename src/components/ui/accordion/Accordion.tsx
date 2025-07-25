import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface AccordionProps {
    title: string;
    content: string;
    index?: number;
}

export default function AccordionUsage({ title, content, index }: AccordionProps) {
    return (
        <div className='py-2'>
            <Accordion defaultExpanded={index === 0} sx={{
                backgroundColor: "#EBF5FF",
                boxShadow: 'inset 0px 4px 25.1px rgba(128, 176, 226, 0.5)',
                borderRadius: '12px',
                padding: '8px',
                border: '1px solid #E6700B33',

            }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{
                        backgroundColor: "transparent",
                        borderRadius: '12px',
                    }}
                >
                    <Typography component="span">{title}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ borderRadius: '12px', backgroundColor: "transparent" }}>
                    <Typography className='text-[#222E48]/70'>{content}</Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}