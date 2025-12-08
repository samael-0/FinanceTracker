import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Transactions() {
  return (
    <div>
      <div className="m-2">Recent Transaction</div>
      <div>
        <Tabs defaultValue="All" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="All">All</TabsTrigger>
            <TabsTrigger value="Revenue">Revenue</TabsTrigger>
            <TabsTrigger value="Expense">Expense</TabsTrigger>
          </TabsList>
          <TabsContent value="All">This is all transactions</TabsContent>
          <TabsContent value="Revenue">This is revenue </TabsContent>
          <TabsContent value="Expense">This is Expense</TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default Transactions;
