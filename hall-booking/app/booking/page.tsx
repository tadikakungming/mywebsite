"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"

export default function BookingPage() {
  const router = useRouter()
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [step, setStep] = useState(1)

  const handleNextStep = () => {
    setStep(step + 1)
  }

  const handlePrevStep = () => {
    setStep(step - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 在实际应用中，这里会处理表单提交
    router.push("/booking/confirmation")
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">预订大礼堂</h1>

      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between mb-8">
          <div className={`flex flex-col items-center ${step >= 1 ? "text-primary" : "text-muted-foreground"}`}>
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step >= 1 ? "bg-primary text-primary-foreground" : "bg-muted"}`}
            >
              1
            </div>
            <span>选择日期</span>
          </div>
          <div className={`flex flex-col items-center ${step >= 2 ? "text-primary" : "text-muted-foreground"}`}>
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step >= 2 ? "bg-primary text-primary-foreground" : "bg-muted"}`}
            >
              2
            </div>
            <span>活动详情</span>
          </div>
          <div className={`flex flex-col items-center ${step >= 3 ? "text-primary" : "text-muted-foreground"}`}>
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step >= 3 ? "bg-primary text-primary-foreground" : "bg-muted"}`}
            >
              3
            </div>
            <span>确认信息</span>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>
              {step === 1 && "选择日期和时间"}
              {step === 2 && "填写活动详情"}
              {step === 3 && "确认预订信息"}
            </CardTitle>
            <CardDescription>
              {step === 1 && "请选择您想预订大礼堂的日期和时间段"}
              {step === 2 && "请提供您的活动详情和联系信息"}
              {step === 3 && "请确认您的预订信息"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <FormLabel>选择日期</FormLabel>
                      <div className="mt-2">
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full justify-start text-left font-normal">
                              <Calendar className="mr-2 h-4 w-4" />
                              {date ? format(date, "PPP") : <span>选择日期</span>}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <CalendarComponent mode="single" selected={date} onSelect={setDate} initialFocus />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>
                    <div className="flex-1">
                      <FormLabel>选择时间段</FormLabel>
                      <div className="mt-2">
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="选择时间段" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="morning">上午 (08:00 - 12:00)</SelectItem>
                            <SelectItem value="afternoon">下午 (13:00 - 17:00)</SelectItem>
                            <SelectItem value="evening">晚上 (18:00 - 22:00)</SelectItem>
                            <SelectItem value="fullday">全天 (08:00 - 22:00)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <FormLabel>活动名称</FormLabel>
                      <Input className="mt-2" placeholder="请输入活动名称" />
                    </div>
                    <div>
                      <FormLabel>活动类型</FormLabel>
                      <Select>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="选择活动类型" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="conference">会议/研讨会</SelectItem>
                          <SelectItem value="performance">表演/音乐会</SelectItem>
                          <SelectItem value="exhibition">展览/展示</SelectItem>
                          <SelectItem value="ceremony">典礼/庆典</SelectItem>
                          <SelectItem value="other">其他</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <FormLabel>预计参与人数</FormLabel>
                    <Input className="mt-2" type="number" placeholder="请输入预计参与人数" />
                  </div>

                  <div>
                    <FormLabel>活动描述</FormLabel>
                    <Textarea className="mt-2" placeholder="请简要描述您的活动内容和需求" />
                  </div>

                  <div>
                    <FormLabel>需要的设备</FormLabel>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center">
                        <input type="checkbox" id="projector" className="mr-2" />
                        <label htmlFor="projector">投影仪</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="microphone" className="mr-2" />
                        <label htmlFor="microphone">麦克风</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="stage" className="mr-2" />
                        <label htmlFor="stage">舞台灯光</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="chairs" className="mr-2" />
                        <label htmlFor="chairs">额外座椅</label>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <FormLabel>联系人姓名</FormLabel>
                      <Input className="mt-2" placeholder="请输入联系人姓名" />
                    </div>
                    <div>
                      <FormLabel>联系电话</FormLabel>
                      <Input className="mt-2" placeholder="请输入联系电话" />
                    </div>
                  </div>

                  <div>
                    <FormLabel>电子邮箱</FormLabel>
                    <Input className="mt-2" type="email" placeholder="请输入电子邮箱" />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">预订信息</h3>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="text-muted-foreground">日期:</div>
                      <div>{date ? format(date, "PPP") : "未选择"}</div>

                      <div className="text-muted-foreground">时间段:</div>
                      <div>下午 (13:00 - 17:00)</div>

                      <div className="text-muted-foreground">活动名称:</div>
                      <div>社区艺术展览</div>

                      <div className="text-muted-foreground">活动类型:</div>
                      <div>展览/展示</div>

                      <div className="text-muted-foreground">参与人数:</div>
                      <div>150人</div>
                    </div>
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">费用明细</h3>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="text-muted-foreground">场地租金:</div>
                      <div>RM 1,000</div>

                      <div className="text-muted-foreground">设备使用费:</div>
                      <div>RM 300</div>

                      <div className="text-muted-foreground">清洁费:</div>
                      <div>RM 200</div>

                      <div className="font-semibold">总计:</div>
                      <div className="font-semibold">RM 1,500</div>
                    </div>
                  </div>

                  <div>
                    <FormLabel>支付方式</FormLabel>
                    <RadioGroup defaultValue="online" className="mt-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="online" id="online" />
                        <FormLabel htmlFor="online" className="font-normal">
                          在线支付
                        </FormLabel>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="transfer" id="transfer" />
                        <FormLabel htmlFor="transfer" className="font-normal">
                          银行转账
                        </FormLabel>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="cash" id="cash" />
                        <FormLabel htmlFor="cash" className="font-normal">
                          现金支付
                        </FormLabel>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="flex items-start space-x-2">
                    <input type="checkbox" id="terms" className="mt-1" />
                    <label htmlFor="terms" className="text-sm">
                      我已阅读并同意
                      <a href="#" className="text-primary underline">
                        预订条款和条件
                      </a>
                    </label>
                  </div>
                </div>
              )}
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            {step > 1 ? (
              <Button variant="outline" onClick={handlePrevStep}>
                上一步
              </Button>
            ) : (
              <div></div>
            )}

            {step < 3 ? <Button onClick={handleNextStep}>下一步</Button> : <Button type="submit">确认预订</Button>}
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

