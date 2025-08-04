USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Table [dbo].[BondInvoice]    Script Date: 4/4/2024 5:45:04 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[BondInvoice](
	[BondInvoiceID] [bigint] IDENTITY(1,1) NOT NULL,
	[BondInvoicePrefix] [varchar](255) NULL,
	[BondInvoiceNo] [varchar](255) NULL,
	[trnDocumentLotDetailsID] INT NULL,
	[InBOENo] [nvarchar](max) NULL,
	[InBOEDate] [datetime] NULL,
	[Agent] [varchar](255) NULL,
	[Line] [varchar](255) NULL,
	[CHA] [varchar](2555) NULL,
	[CHAID] [int] NULL,
	[Forwarder] [varchar](255) NULL,
	[ForwarderID] [int] NULL,
	[Consoler] [varchar](255) NULL,
	[ConsolerID] [int] NULL,
	[Importer] [varchar](255) NULL,
	[ImporterID] [int] NULL,
	[BillToParty] [nvarchar](max) NULL,
	[BillToPartyID] [int] NULL,
	[BillToAddress] [nvarchar](max) NULL,
	[BillToAddressID] [int] NULL,
	[GSTINNo] [varchar](255) NULL,
	[StateName] [varchar](255) NULL,
	[StateID] [int] NULL,
	[StateCode] [varchar](255) NULL,
	[SEZStatus] [varchar](255) NULL,
	[NOCNo] [varchar](255) NULL,
	[NOCDate] [datetime] NULL,
	[NOCID] [int] NULL,
	[LastNOCValidUpto] [datetime] NULL,
	[LastStoragePattern] [varchar](255) NULL,
	[NoOfStoragePeriod] [int] NULL,
	[StoragePeriod] [varchar](255) NULL,
	[NOCValidUpto] [datetime] NULL,
	[BilledArea] [decimal](18, 0) NULL,
	[AdditionalBilledArea] [decimal](18, 0) NULL,
	[TotBilledArea] [decimal](18, 0) NULL,
	[TotalBilledAv] [int] NULL,
	[TotaLBilledDv] [int] NULL,
	[TotalBilledAvDv] [int] NULL,
	[PaymentMode] [varchar](255) NULL,
	[ManualSSRNo] [varchar](255) NULL,
	[Remarks] [varchar](255) NULL,
	[IsOmitDVinInsCal] [bit] NULL,
	[IsOmitAVinInsCal] [bit] NULL,
	[IsFinished] [bit] NOT NULL,
	[Flagdeleted] [bit] NOT NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [int] NULL,
	[UpdatedDate] [datetime] NULL,
	[IsApproved] [int] NOT NULL,
	[ApprovedDate] [datetime] NULL,
	[ApprovedRemarks] [nvarchar](max) NULL,
	[UnApprovedRemarks][nvarchar](max) NULL,
	[YearID] INT NULL,
PRIMARY KEY CLUSTERED 
(
	[BondInvoiceID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[BondInvoice] ADD  DEFAULT ((0)) FOR [IsOmitDVinInsCal]
GO

ALTER TABLE [dbo].[BondInvoice] ADD  DEFAULT ((0)) FOR [IsOmitAVinInsCal]
GO

ALTER TABLE [dbo].[BondInvoice] ADD  DEFAULT ((0)) FOR [IsFinished]
GO

ALTER TABLE [dbo].[BondInvoice] ADD  DEFAULT ((0)) FOR [Flagdeleted]
GO

ALTER TABLE [dbo].[BondInvoice] ADD  DEFAULT ([dbo].[GetCurrentDateTime]()) FOR [CreatedDate]
GO

ALTER TABLE [dbo].[BondInvoice] ADD  DEFAULT ((0)) FOR [IsApproved]
GO


