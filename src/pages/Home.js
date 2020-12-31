import React, {useState, useEffect} from 'react'

import logo from '../assets/logo.svg'
import {Wrapper, CardContainer, Templates, Form,Button} from './styles'

import qs from 'qs'

export default function Home() {

    const [templates, setTemplates] = useState([])
    const [selectedTemplate, setSelectedTemplate] = useState ([])
    const [boxes, setBoxes] = useState([])
    const [generatedMeme, setGeneratedMeme] = useState(null)

    useEffect(() => {
        try {
            (async () => {
                const response = await fetch('https://api.imgflip.com/get_memes');
                const {data: {memes}} = await response.json()
                setTemplates(memes)
            })()
        } catch (error) {
            console.log(error)
        }
    }, [])

    const handleInputCHange = (index) => (e) => {
        const newValues = boxes;
        newValues[index] = e.target.value
        setBoxes(newValues)
    }

    function handleSelectTemaplate(template){
        setSelectedTemplate(template)
        setBoxes([])
    }

     async function handleSubmit(e){    
        e.preventDefault()
        try {
        const getApi = setTimeout( async () => {
    
                const params = qs.stringify({
                    template_id: selectedTemplate.id,
                    username: 'thealphaman3',
                    password: 'thealphaman3',
                    boxes: boxes.map(text => ({text}))
                })
    
                const resp = await fetch(`https://api.imgflip.com/caption_image?${params}`)
                const {data: {url}} = await resp.json()
               
                setGeneratedMeme(url)
                console.log(generatedMeme)


            }, 100)
        return () => {clearTimeout(getApi)}
        }
        catch (error) {
            console.log(error)
        }
    }


    function handleReset(){
        setSelectedTemplate([])
        setBoxes([])
        setGeneratedMeme(null)
    }

    return (
        <Wrapper>
            <img src={logo} alt="Meme maker"/>
            <CardContainer>
                {generatedMeme && (
                  <>
                    <img src={generatedMeme} alt="genrated meme"/>
                    <Button style={{marginTop: 20}} onClick={handleReset}>Gerar outro meme</Button>
                  </>
                )}
                {!generatedMeme && (
                    <>
                    <h2>Selecione um template</h2>
                        <Templates>
                        {templates.map(template => (
                            <button
                                key={template.id}
                                type='button'
                                onClick= {() => handleSelectTemaplate(template)}
                                className={template.id === selectedTemplate?.id ? 'selected' : ''}
                            >
                                <img src={template.url} alt={template.name}/>
                            </button>
                        ))}
                        </Templates>
                    <h2>Textos</h2>
                    <Form onSubmit={handleSubmit}>
                        {(new Array(selectedTemplate.box_count)).fill('').map((_, index) => (
                            <input 
                                type="text"
                                key={String(Math.random())}
                                placeholder={`Texto ${index + 1}`}
                                onChange={handleInputCHange(index)}
                            />
                        ))}
                        <Button type='submit'>
                            Gerar meu meme
                        </Button>
                    </Form>
                    </>
                )}
            </CardContainer>
        </Wrapper>
    )
}
