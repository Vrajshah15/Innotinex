import * as React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'

describe('Button', () => {
  it('renders correctly with default props', () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('bg-accent', 'text-primary-text', 'h-11', 'px-5')
  })

  it('renders primary variant correctly', () => {
    render(<Button variant="primary">Primary</Button>)
    const button = screen.getByRole('button', { name: /primary/i })
    expect(button).toHaveClass('bg-accent', 'text-primary-text')
  })

  it('renders secondary variant correctly', () => {
    render(<Button variant="secondary">Secondary</Button>)
    const button = screen.getByRole('button', { name: /secondary/i })
    expect(button).toHaveClass('bg-primary', 'text-white')
  })

  it('renders outline variant correctly', () => {
    render(<Button variant="outline">Outline</Button>)
    const button = screen.getByRole('button', { name: /outline/i })
    expect(button).toHaveClass('border-2', 'border-primary', 'bg-transparent')
  })

  it('renders ghost variant correctly', () => {
    render(<Button variant="ghost">Ghost</Button>)
    const button = screen.getByRole('button', { name: /ghost/i })
    expect(button).toHaveClass('hover:bg-primary/5', 'text-primary-text')
  })

  it('renders sm size correctly', () => {
    render(<Button size="sm">Small</Button>)
    const button = screen.getByRole('button', { name: /small/i })
    expect(button).toHaveClass('h-9', 'rounded-lg', 'px-4', 'text-xs')
  })

  it('renders lg size correctly', () => {
    render(<Button size="lg">Large</Button>)
    const button = screen.getByRole('button', { name: /large/i })
    expect(button).toHaveClass('h-14', 'rounded-xl', 'px-8', 'text-base')
  })

  it('renders icon size correctly', () => {
    render(<Button size="icon">I</Button>)
    const button = screen.getByRole('button', { name: /i/i })
    expect(button).toHaveClass('h-11', 'w-11')
  })

  it('applies custom className', () => {
    render(<Button className="custom-class">Custom</Button>)
    const button = screen.getByRole('button', { name: /custom/i })
    expect(button).toHaveClass('custom-class')
  })

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLButtonElement>()
    render(<Button ref={ref}>Ref</Button>)
    expect(ref.current).toBeInstanceOf(HTMLButtonElement)
  })

  it('passes HTML button attributes', () => {
    render(<Button disabled type="submit" aria-label="Submit button">Submit</Button>)
    const button = screen.getByRole('button', { name: /submit button/i })
    expect(button).toBeDisabled()
    expect(button).toHaveAttribute('type', 'submit')
  })

  it('handles onClick events', async () => {
    const handleClick = jest.fn()
    const user = userEvent.setup()

    render(<Button onClick={handleClick}>Click me</Button>)
    const button = screen.getByRole('button', { name: /click me/i })

    await user.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
