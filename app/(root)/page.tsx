import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn = {firstName: 'George'}

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type="greeting" 
            title="Hello" 
            user={loggedIn?.firstName || 'guest'} 
            subtext="Access and manage your accounts and transactions effieciently"
          />  

          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.90}
          />
        </header>
      </div>
    </section>
  )
}

export default Home