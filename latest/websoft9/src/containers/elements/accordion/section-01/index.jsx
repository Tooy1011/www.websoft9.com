import React from "react";
import Accordion from "@ui/accordion";
import Heading from "@ui/heading";
import { Container, Row, Col } from "@ui/wrapper";
import { SectionWrap } from "./style";

const AccordionArea = ({data}) => (
    <SectionWrap>
        <Container>
            <Row>
                <Col lg={8} mx="auto">
                    {data?.title && (
                        <Heading as="h4" mb="37px">
                            {data.title}
                        </Heading>
                    )}
                    {data?.items && <Accordion data={data.items} />}
                </Col>
            </Row>
        </Container>
    </SectionWrap>
);

export default AccordionArea;
