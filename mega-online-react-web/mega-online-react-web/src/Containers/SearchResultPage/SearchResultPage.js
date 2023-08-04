import React from 'react'
import { Container, Section, StyledButton, StyledSelect, Wrapper } from '../../assets/Themes/Styles/StyledComponents'
import ResultProductCard from '../../Components/ProductCards/ResultProductCard'
import * as AiIcons from "react-icons/ai"

const SearchResultPage = () => {
  return (
    <Wrapper>
        <Container>
            <div className='result_header'>
                <h3>210,000+ <span> results for </span>“Samsung Phone”</h3>
                <div className='sorting_main'>
                    <StyledSelect
                        placeholder="Shipping to: Kenya"
                        style={{
                            minWidth:"150px"
                        }}
                        options={[
                            {
                                value: 'Kenya',
                                label: 'Kenya',
                            },
                            {
                                value: 'Pakistan',
                                label: 'Pakistan',
                            },
                        ]}
                    />
                    <StyledSelect
                        placeholder="Sort by"
                        style={{
                            width:"100px"
                        }}
                        options={[
                            {
                                value: 'New',
                                label: 'New',
                            },
                            {
                                value: 'Used',
                                label: 'Used',
                            },
                        ]}
                    />
                </div>
            </div>
            <div className='result_main'>
                <div className='result_sidebar'>
                    
                </div>
                <div className='result_products_main'>
                    <ResultProductCard/>
                    <ResultProductCard/>
                    <ResultProductCard/>
                    <ResultProductCard/>
                    <ResultProductCard/>
                    <div className='load_button'>
                        <StyledButton type='secondary' width="small">
                            <AiIcons.AiOutlineReload/>Load More
                        </StyledButton>
                    </div>
                </div>
            </div>
        </Container>
    </Wrapper>
  )
}

export default SearchResultPage